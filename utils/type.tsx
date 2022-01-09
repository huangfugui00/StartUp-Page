export type navType ={
    label:string,
    path:string,
}

export type keyFeature={
    id:number,
    imgSrc:string,
    altText:string,
    title:string,
    text:string,
}

export type planType={
    id: number,
    name: string,
    header?:string,
    description: string,
    priceWithUnit:string,
    buttonText: string,
    anotherOption?:string,
    points:  {
        id: number,
        text: string,
        isAvailable: boolean,
      }[],
  }