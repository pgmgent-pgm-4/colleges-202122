import useFetch from '../hooks/useFetch';

const GDMGHENT_API_PROJECTS = 'https://www.gdm.gent/static/data/cases.json';

const GDMGhentCasesList = () => {
  const [data, error, isLoading] = useFetch(GDMGHENT_API_PROJECTS);

  return (
    <div className="container">
      <div className="row g-0">
      {data && 
        data.map((project) => {
          return (
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-4 col-xxl-3">
              <div className="card">
                <img src={project.Picture} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{project.Title}</h5>
                  <p className="card-text">{project.Description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default GDMGhentCasesList;