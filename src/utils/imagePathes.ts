import casino from '@/assets/images/casino.jpg';
import doge from '@/assets/images/doge.jpg';
import esus from '@/assets/images/esus.jpg';
import fox from '@/assets/images/fox.jpeg';
import gringer_cat from '@/assets/images/gringer_cat.jpeg';
import harold from '@/assets/images/harold.jpg';
import incredible from '@/assets/images/incredible.webp';
import kotli from '@/assets/images/kotli.jpg';

export const imagePathes: string[] = [];

imagePathes.push(casino);
imagePathes.push(doge);
imagePathes.push(esus);
imagePathes.push(fox);
imagePathes.push(gringer_cat);
imagePathes.push(harold);
imagePathes.push(incredible);
imagePathes.push(kotli);
imagePathes.push(casino);
imagePathes.push(doge);
imagePathes.push(esus);
imagePathes.push(fox);
imagePathes.push(gringer_cat);
imagePathes.push(harold);
imagePathes.push(incredible);
imagePathes.push(kotli);

const randomizeThisShit = (arr: string[]) => {
  const resultArray: string[] = [];
  const cash: number[] = [];

  arr.forEach((item, index) => {
    let randomIndex = Math.floor(Math.random() * imagePathes.length);
    console.log(randomIndex);

    do {
      randomIndex = Math.floor(Math.random() * imagePathes.length);
    } while (cash.includes(randomIndex));

    cash.push(randomIndex);
    const targetItem = arr[randomIndex];
    resultArray.push(targetItem);
  });

  return resultArray;
};

export const randomImagePathes = randomizeThisShit(imagePathes);
