
function CardChooser(data) {
  let selected = [];
  let keys = Object.keys(data);

  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * keys.length);
    let breed = keys[randomIndex];
    let image = data[breed];
    selected.push({ breed, image });
  }

  return selected;
}

export default CardChooser;
