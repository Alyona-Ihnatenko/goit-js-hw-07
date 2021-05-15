// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientEl=document.querySelector('#ingredients');
  function createItem(ingredients){
      const ItemName=ingredients.map(ingredient=>{
        let getIngredient=document.createElement('li');
        getIngredient.textContent=ingredient;
        return getIngredient;
      })
   ingredientEl.append(...ItemName);
  }
createItem(ingredients);