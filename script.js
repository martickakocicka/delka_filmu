/*let hodinovka = 320
let pracovniDoba = 7
let pracovniDny = 21
let mesicniPrijem = hodinovka * pracovniDoba * pracovniDny

console.log (hodinovka * pracovniDoba * pracovniDny);

document.body.innerHTML = mesicniPrijem

let zivnostPausal = mesicniPrijem * 0.4
let dan = zivnostPausal * 0.15

console.log (Math.floor (dan))
; 
*/



/*V programu kin se často uvádí délka filmu v minutách.
Například rozšířená verze filmu :i[Pán prstenů: Dvě věže] trvá 223 minut.
My bychom ovšem délku filmu raději věděli v hodinách a minutách.
Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film
 :i[Pán prstenů: Dvě věže].
Obě hodnoty vypište do stránky.*/

const delka = 223
let delkaVHodinach = Math.floor (delka / 60)
console.log ("cele hodiny " + Math.floor (delkaVHodinach));

let celeHodinyVMinutach = delkaVHodinach * 60
let zbytekMinut = (delka - celeHodinyVMinutach)
console.log ("zbytek minut " + zbytekMinut);


//nebo

let zbyvajiciMinuty = delka % (celeHodinyVMinutach)
console.log ("zbytek minut " + zbyvajiciMinuty);

document.body.innerHTML= "Dvě Věže mají " + delkaVHodinach + " hodiny a " + zbyvajiciMinuty + " minut."

