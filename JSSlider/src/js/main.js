import 'bootstrap/scss/bootstrap.scss';
import '../scss/main.scss';
import $ from 'jquery';

// 既然是轮播效果，那么就一定会从第一个开始，也就是下标为 0 的那个列表开始
// 那么可以有一个变量 index ，存放着当前的数组下标，当等于数组总长度的时候
// 则归零，意味着从头开始循环

let objSliders = $('#slider > li');
let objDots = $('#dots');

$(document).ready(function() {
    showSlider(objSliders, objDots);
})

function showSlider(sliders, dots) {
    let index = 0;
    sliders.each(function(){
        dots.addClass('dots').append('<li/>');
    })
    setInterval(function(){
        let dot = dots.find('li');
        if (!(index < sliders.length)) {
            index = 0;
        }
        sliders.eq(index).show().siblings().hide();
        dot.eq(index).addClass('dot-active').siblings().addClass('dot-normal').removeClass('dot-active');
        index++;
    }, 3000);
}