function constructionCrew(worker) {

  if (!worker.dizziness) {
    return worker;
  }
  
  worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
  worker.dizziness = false;
  return worker;
}

let res = constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true
});
console.log(res);
