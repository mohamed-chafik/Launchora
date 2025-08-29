export function NextLaunch(index: number){
    if (index < 10) {
    index = index++

    return index;
  }
  else{
    loadLaunch()
  }
  return index;
}


