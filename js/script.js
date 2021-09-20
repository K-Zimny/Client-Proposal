// ============================================================================================================================================================== */
// jQuery check if document is ready
//  ============================================================================================================================================================== */

jQuery(document).ready(function () {
  console.log("ready!");

  jQuery("#design-sub-menu").css({ display: "none" });

  jQuery("#design-menu").click(function () {
    jQuery("#design-sub-menu").animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      "slow"
    );
  });
}); //End jQuery Document ready function
