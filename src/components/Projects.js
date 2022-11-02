function Projects(props) {
  return (
    <div className=''>
      <h3 id='my-projects'>My Projects</h3>
      <div>
        <h1>{props.projectMain}</h1>
        <a href={props.main} target='_blank' rel='noopener noreferrer'>
          <img src={props.mainImg} alt={props.main}></img>
        </a>
        <a
          href={props.projectMainRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo
        </a>
      </div>
      <div>
        <h1>{props.project1}</h1>
        <a href={props.projectOne} target='_blank' rel='noopener noreferrer'>
          <img src={props.p1Img} alt={props.pproject1}></img>
        </a>
        <a
          href={props.projectOneRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo
        </a>
      </div>
      <div>
        <h1>{props.project2}</h1>
        <a href={props.projectTwo} target='_blank' rel='noopener noreferrer'>
          <img src={props.p2Img} alt={props.project2}></img>
        </a>
        <a
          href={props.projectTwoRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo
        </a>
      </div>
      <div>
        <h1>{props.project3}</h1>
        <a href={props.projectThree} target='_blank' rel='noopener noreferrer'>
          <img src={props.p3Img} alt={props.project3}></img>
        </a>
        <a
          href={props.projectThreeRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo
        </a>
      </div>
      <div>
        <h1>{props.project4}</h1>
        <a href={props.projectFour} target='_blank' rel='noopener noreferrer'>
          <img src={props.p4Img} alt={props.project4}></img>
        </a>
        <a
          href={props.projectFourRepo}
          target='_blank'
          rel='noopener noreferrer'
        >
          Repo
        </a>
      </div>
    </div>
  );
}

export default Projects;
