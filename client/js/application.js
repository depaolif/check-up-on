$(() => {
  $('[data-toggle="tooltip"]').tooltip()
  $("#query").click(googleCall)
  $("#search-field").keypress((e) => {
    if (e.which == 13) {
      googleCall()
    }
  })
})
