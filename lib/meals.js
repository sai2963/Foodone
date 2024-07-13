import sql from 'better-sqlite3';
import slugify from 'slugify';
import fs from 'fs'
import xss from 'xss';

const db = sql('meals.db');

export function getMeals() {
    // Simulating async delay if needed
    return new Promise((resolve) => {
        
        setTimeout(() => {
            
            const meals = db.prepare('SELECT * FROM meals').all();
            resolve(meals);
        }, 5000);
        
    });
}

export  function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug =?').get (slug)
}

export async function saveMeal (meal){
    meal.slug = slugify(meal.title,{lower:true});
    meal.instructions =xss(meal.instructions);

    const extension= meal.image.name.split('.').pop();
    const filename =`${meal.slug}.${extension}`;

    const stream= fs.createWriteStream(`public/images/${filename}`)
    const bufferImage=await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferImage),(error)=>{
        if(error){
            throw new Error('Saving Image Failed')
        }

    })
    meal.image=`/images/${filename}`
    db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(meal);
}
