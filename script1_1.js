document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde sadece kategorileri göster
    var allCategories = document.querySelectorAll('.menu-group');
    allCategories.forEach(function (category) {
      category.style.display = 'none';
    });
  
    // İlk kategoriye ait içeriği göster
    var defaultCategory = document.getElementById('category1');
    if (defaultCategory) {
      defaultCategory.style.display = 'grid';
    }
  });
  
  function showCategory(categoryId) {
    // Tüm kategorileri gizle
    var allCategories = document.querySelectorAll('.menu-group');
    allCategories.forEach(function (category) {
      category.style.display = 'none';
    });
  
    // Belirli kategoriyi göster
    var selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
      selectedCategory.style.display = 'grid';
    }
  }
  