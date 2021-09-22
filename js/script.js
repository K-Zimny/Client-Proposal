// ============================================================================================================================================================== */
// jQuery check if document is ready
//  ============================================================================================================================================================== */

jQuery(document).ready(function () {
  console.log("ready!");

  jQuery("#design-sub-menu").css({ display: "none" });
  jQuery("#design-sub-menu").addClass("sub-menu-closed");

  jQuery("#design-menu >.wp-block-group__inner-container > p").click(
    function () {
      if (jQuery("#design-sub-menu").hasClass("sub-menu-closed")) {
        jQuery("#design-sub-menu").animate(
          {
            // height: "toggle",
            opacity: "toggle",
          },
          "600"
        );
        jQuery("#design-sub-menu").removeClass("sub-menu-closed");
      } else {
        jQuery("#design-sub-menu").css({ opacity: "toggle", display: "none" });
        jQuery("#design-sub-menu").addClass("sub-menu-closed");
      }
    }
  );
}); //End jQuery Document ready function

// ============================================================================================================================================================== */
// Gauge js
//  ============================================================================================================================================================== */

var defs1 = {
  min: 0,
  max: 100,
  gaugeWidthScale: 0.4,
  levelColors: ["#ff0000", "#ff0000", "#ffa500", "#008000"],
  counter: true,
  pointer: true,
  donut: true,
  textRenderer: function (val) {
    return val + "/" + 100;
  },
  relativeGaugeSize: true,
  pointerOptions: {
    toplength: -15,
    bottomlength: 10,
    bottomwidth: 12,
    color: "#8e8e93",
    stroke: "#ffffff",
    stroke_width: 2,
    stroke_linecap: "round",
  },
  startAnimationTime: 2500,
  startAnimationType: "<>",
};

var defs2 = {
  min: 0,
  max: 100,
  gaugeWidthScale: 0.3,
  levelColors: ["#ff0000", "#ff0000", "#ffa500", "#008000"],
  counter: true,
  pointer: true,
  donut: false,
  textRenderer: function (val) {
    return val + "/" + 100;
  },
  relativeGaugeSize: true,
  pointerOptions: {
    toplength: -15,
    bottomlength: 10,
    bottomwidth: 6,
    color: "#8e8e93",
    stroke: "#ffffff",
    stroke_width: 1,
    stroke_linecap: "round",
  },
  startAnimationTime: 2500,
  startAnimationType: "<>",
};

// Website Score
var overallScoreVal = document.getElementById("overallScore").textContent;

if (overallScoreVal >= 90) {
  document.getElementById("overallScorePlaceholder").innerHTML = "<p>Good</p>";
} else if (overallScoreVal >= 50) {
  document.getElementById("overallScorePlaceholder").innerHTML =
    "<p>Needs Improvement</p>";
} else {
  document.getElementById("overallScorePlaceholder").innerHTML = "<p>Poor</p>";
}

var overallScore = new JustGage({
  id: "overallScore", // the id of the html element
  value: overallScoreVal,
  defaults: defs1,
});

// Google Score

var googleScoreVal = document.getElementById("googleScore").textContent;

if (googleScoreVal >= 90) {
  document.getElementById("googleScorePlaceholder").innerHTML = "<p>Good</p>";
} else if (googleScoreVal >= 50) {
  document.getElementById("googleScorePlaceholder").innerHTML =
    "<p>Needs Improvement</p>";
} else {
  document.getElementById("googleScorePlaceholder").innerHTML = "<p>Poor</p>";
}

var googleScore = new JustGage({
  id: "googleScore", // the id of the html element
  value: googleScoreVal,
  defaults: defs2,
});

// SEO Score

var seoScoreVal = document.getElementById("seoScore").textContent;

if (seoScoreVal >= 90) {
  document.getElementById("seoScorePlaceholder").innerHTML = "<p>Good</p>";
} else if (seoScoreVal >= 50) {
  document.getElementById("seoScorePlaceholder").innerHTML =
    "<p>Needs Improvement</p>";
} else {
  document.getElementById("seoScorePlaceholder").innerHTML = "<p>Poor</p>";
}

var seoScore = new JustGage({
  id: "seoScore", // the id of the html element
  value: seoScoreVal,
  defaults: defs2,
});

// Accessibility Score

var accessibilityScoreVal =
  document.getElementById("accessibilityScore").textContent;

if (accessibilityScoreVal >= 90) {
  document.getElementById("accessibilityScorePlaceholder").innerHTML =
    "<p>Good</p>";
} else if (accessibilityScoreVal >= 50) {
  document.getElementById("accessibilityScorePlaceholder").innerHTML =
    "<p>Needs Improvement</p>";
} else {
  document.getElementById("accessibilityScorePlaceholder").innerHTML =
    "<p>Poor</p>";
}

var accessibilityScore = new JustGage({
  id: "accessibilityScore", // the id of the html element
  value: accessibilityScoreVal,
  defaults: defs2,
});

// Best Practices Score

var bestPracticesScoreVal =
  document.getElementById("bestPracticesScore").textContent;

if (bestPracticesScoreVal >= 90) {
  document.getElementById("bestPracticesScorePlaceholder").innerHTML =
    "<p>Good</p>";
} else if (bestPracticesScoreVal >= 50) {
  document.getElementById("bestPracticesScorePlaceholder").innerHTML =
    "<p>Needs Improvement</p>";
} else {
  document.getElementById("bestPracticesScorePlaceholder").innerHTML =
    "<p>Poor</p>";
}

var bestPracticesScore = new JustGage({
  id: "bestPracticesScore", // the id of the html element
  value: bestPracticesScoreVal,
  defaults: defs2,
});
