// MPLT Lab 1 - 00 WARM-UP: predict, vote, run                    (5 min, whole class)
// Tool: TypeScript Playground. Press "Run" (Ctrl/Cmd + Enter) and open the "Logs" tab.
//
// RULE: PREDICT FIRST. Do not press Run yet. For each case choose one:
//   A) the compiler rejects it (red underline)
//   B) it compiles, then crashes at run time
//   C) it compiles and runs fine

class Animal { name = "animal"; }
class Dog extends Animal { bark() { return "woof"; } }
class Cat extends Animal { meow() { return "meow"; } }

// CASE 1 - a function that receives a string or null
function shout(s: string | null) {  
  if(s!==null){
    return s.toUpperCase();
  }
  return 'okaydi';
}

// CASE 2 - a Dog[] used as an Animal[]
const dogs: Dog[] = [new Dog()];
const animals: readonly Animal[] = dogs;
const second: Dog | undefined = dogs[1];

// CASE 3 - the first element of an empty array
const cities: string[] = [];
const firstCity: string | undefined = cities[0];

// ---- each case runs separately, so one crash does not hide the others ----
function attempt(label: string, f: () => unknown) {
  try { console.log(label, "->", f()); }
  catch (e) { console.log(label, "-> RUN-TIME ERROR:", String(e)); }
}
attempt("CASE 1  shout(null)     ", () => shout(null));
attempt("CASE 2  second.bark()   ", () => second?.bark() ?? "it deyil");
attempt("CASE 3  firstCity.length", () => firstCity?.length ?? 0);
