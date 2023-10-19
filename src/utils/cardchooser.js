function CardChooser(data) {
  let selected = [];
  let keys = Object.keys(data);

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * keys.length);
    let breed = keys[randomIndex];
    let image = data[breed];
    selected.push({ name: breed, image: data[breed] });
  }

  return selected;
}

export default CardChooser;
