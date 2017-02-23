$(document).ready(function() {
  toggleTextInputDisabled();
});

function toggleTextInputDisabled() {
  $(document).on("click", ":checkbox", function() {
    var tauschInput = $(".input-group-addon").parent().find("input:text");
    if($(this).prop("checked")) {
      tauschInput.prop("disabled", false)
    } else {
      tauschInput.prop("disabled", true);
    }
   });
}
