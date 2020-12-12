class Controller<IndexResponse, ShowResponse> {
  index(model: string) : Promise<IndexResponse> {
    const Model = require(`models/${model}`).default;
    return (new Model).list();
  }
  
  show(model: string, { id } : { id: number }) : Promise<ShowResponse> {
    const Model = require(`models/${model}`).default;
    return (new Model).getById(id);
  }
}

export default Controller;



