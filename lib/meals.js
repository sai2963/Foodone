import sql from 'better-sqlite3';

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
