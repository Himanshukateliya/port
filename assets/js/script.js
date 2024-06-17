$(".ronak").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autosplay: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".sakshi").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autosplay: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
const choices = new Choices('[data-trigger]', {
  searchEnabled: false,
  itemSelectText: '',
});

function filterProducts() {
  const category = document.getElementById('category').value.toLowerCase();
  const keywords = document.getElementById('search').value.toLowerCase().split(' ');

  document.querySelectorAll('.product').forEach(product => {
    const productCategory = product.getAttribute('data-category').toLowerCase();
    const productKeywords = product.getAttribute('data-keywords').toLowerCase();

    let matchesCategory = category === '' || productCategory.includes(category);
    let matchesKeywords = keywords.every(keyword => productKeywords.includes(keyword));

    if (matchesCategory && matchesKeywords) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
