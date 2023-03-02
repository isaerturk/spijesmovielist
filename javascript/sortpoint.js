var $select = $("#sortingpoint");
var $cards = $(".watchlist-item");
var defaultOrder = $cards.clone().toArray();

$select.on("change", function () {
  var order = $(this).val();
  if (order === "normal") {
    $cards.remove();
    defaultOrder.forEach(function (card) {
      $(".watchlist-container").append(card);
    });
  } else {
    sortCards(order);
  }
});

function sortCards(order) {
  var sortingKey, sortingDirection;

  if (order === "desc") {
    sortingKey = "puanspan";
    sortingDirection = "desc";
  } else if (order === "asc") {
    sortingKey = "puanspan";
    sortingDirection = "asc";
  } else if (order === "az") {
    sortingKey = "isimheader";
    sortingDirection = "asc";
  } else if (order === "za") {
    sortingKey = "isimheader";
    sortingDirection = "desc";
  }

  var sortedCards = $cards.sort(function (a, b) {
    var aVal = $(a)
      .find("." + sortingKey)
      .text()
      .toLowerCase();
    var bVal = $(b)
      .find("." + sortingKey)
      .text()
      .toLowerCase();

    if (sortingDirection === "asc") {
      return aVal.localeCompare(bVal);
    } else {
      return bVal.localeCompare(aVal);
    }
  });

  $(".watchlist-container").empty();
  sortedCards.each(function () {
    $(".watchlist-container").append(this);
  });
}
