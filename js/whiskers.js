(function() {
  var photos = "225229760857391?fields=photos.limit(100).fields(source)";

  var renderPhotos = function(photos) {
    var container = document.getElementById("photos");
    container.innerHTML = "";
    var left = document.createElement("div");
    left.setAttribute('class', 'left');
    var right = document.createElement("div");
    right.setAttribute('class', 'right');
    container.appendChild(left);
    container.appendChild(right);

    for (i in photos) {
      var photo = photos[i];
      var img = document.createElement("img");
      img.src = photo.source;
      if (i%2) {
        left.appendChild(img);
      } else {
        right.appendChild(img);
      }
    }
    container.setAttribute("class", "slid");
  }

  FB.api(photos, function(r) {
    renderPhotos(r.photos.data)
  });
})();
