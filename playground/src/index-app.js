import { createApp } from "vue";

// Import bs css
import "../../src/scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

//import './style.css'
import App from "./components/index-app.vue";
import "../../src/helpers.js";

//createApp(App).mount('#app')
import * as $ from "jquery";

$(function () {
  this.config = {
    orderDetails: {
      detailsList: null,
      currentIndex: 0,
      pageSizeAFragment: 10,
      ifShowPreviousFragment: false,
      ifShowNextFragment: false,
      currentFragment: 1, //from 1
      totalRecord: 0,
      totalFragments: 0,
    },
  };

  this.toggleOrderDetails = function() {
    let idx = self.config.orderDetails.currentIndex;
    $(".content")
      .empty()
      .html(self.config.orderDetails.detailsList[idx].content);
  }
  this.setPager = function(direction) {
    $(".order-pager-placeholder").empty();

    self.config.orderDetails.ifShowPreviousFragment =
      self.config.orderDetails.currentFragment != 1;
    self.config.orderDetails.ifShowNextFragment =
      self.config.orderDetails.currentFragment >= 1 &&
      self.config.orderDetails.currentFragment !=
        self.config.orderDetails.totalFragments;

    if (self.config.orderDetails.ifShowPreviousFragment) {
      let privouseFragmentNumber = self.config.orderDetails.currentFragment - 1;
      console.log(privouseFragmentNumber);
      $(".order-pager-placeholder").append(
        $(
          `<a class="mx-2 btn-page-fragment-toggle btn btn-info btn-go-previous" data-fragment-index="${privouseFragmentNumber}">上10頁</a>`
        )
      );
    }

    let start =
      (self.config.orderDetails.currentFragment - 1) *
      self.config.orderDetails.pageSizeAFragment;
    let end =
      (self.config.orderDetails.currentFragment - 1 + 1) *
      self.config.orderDetails.pageSizeAFragment;
    if (end >= self.config.orderDetails.totalRecord)
      end = self.config.orderDetails.totalRecord;

    console.log(direction);
    let detailsIndex = direction == "-" ? end - 1 : start;
    console.log(detailsIndex);
    self.config.orderDetails.currentIndex = detailsIndex;
    self.toggleOrderDetails();

    for (let idx = start; idx < end; idx++) {
      let btnClass = "btn-info";
      if (idx == detailsIndex) {
        btnClass = "btn-primary";
      }

      $(".order-pager-placeholder").append(
        $(
          `<a class="mx-2 btn-order-toggle btn ${btnClass}" data-order-index="${idx}">${
            idx + 1
          }</a>`
        )
      );
    }
    console.log(self.config.orderDetails.currentFragment);

    if (self.config.orderDetails.ifShowNextFragment) {
      let nextFragmentNumber = self.config.orderDetails.currentFragment + 1;
      console.log(nextFragmentNumber);
      $(".order-pager-placeholder").append(
        $(
          `<a class="mx-2 btn-page-fragment-toggle btn btn-info btn-go-next" data-fragment-index="${nextFragmentNumber}">下10頁</a>`
        )
      );
    }
  }

  let self;
  self = this;

  // Code here
  self.config.orderDetails.detailsList = [];
  for (let i = 0; i < 21; i++) {
    let itemNumber = i + 1;
    self.config.orderDetails.detailsList.push({
      content: `item-${itemNumber}`,
    });
  }

  //載入資料時設定換頁連結參數
  self.config.orderDetails.totalRecord =
    self.config.orderDetails.detailsList.length;
  self.config.orderDetails.totalFragments = Math.ceil(
    self.config.orderDetails.totalRecord / 10
  );

  //render 換頁連結
  self.setPager();


  //換上/下 x 頁
  $(document).on("click", ".btn-page-fragment-toggle", function () {
    let targetFragment = $(this).attr("data-fragment-index");
    console.log(targetFragment);
    self.config.orderDetails.currentFragment = Number(targetFragment);
    let direction = $(this).hasClass("btn-go-next") ? "+" : "-";
    self.setPager(direction);
  });

  //載入特定一筆資料
  $(document).on("click", ".btn-order-toggle", function () {
    let $p = $(this).parents(".order-pager-placeholder");
    $p.find(".btn-primary").removeClass("btn-primary").addClass("btn-info");
    $(this).removeClass("btn-info").addClass("btn-primary");

    self.config.orderDetails.currentIndex = $(this).attr("data-order-index");
    self.toggleOrderDetails();
  });
});
