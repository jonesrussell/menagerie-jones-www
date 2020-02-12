// @flow
import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import './Projects.scss';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      projects: [],
      isOpen: false,
      images: [],
      photoIndex: 0,
    };
  }

  componentDidMount() {
    let _this = this;

    fetch(process.env.REACT_APP_API_URL + '/node/3?_format=json')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let title = data.title[0].value;
        let body = '';

        if (typeof data.body[0] !== 'undefined') {
          body = data.body[0].value;
        }

        _this.setState({
          title: title,
          body: body,
        });
      });

    fetch(process.env.REACT_APP_API_URL + '/projects?_format=json')
      .then(results => {
        return results.json();
      })
      .then(data => {
        _this.setState({ projects: data });
      });
  }

  showImage(image, i) {
    let _this = this;
    // TODO: imgUrl should not need adjustment
    // let imgUrl = image[0].url.replace('http://localhost', 'http://192.168.0.25');let imgUrl = image[0].url.replace('http://localhost', 'http://192.168.0.25');
    const imgUrl = image[0].url;

    return (
      <img
        src={imgUrl}
        alt={image[0].alt}
        onClick={function() {
          _this.setState({
            photoIndex: i,
            isOpen: true,
          });
        }}
      />
    );
  }

  showBadge(badge) {
    return badge[0].value ? <Badge>Proof of concept</Badge> : '';
  }

  showDemo(demo) {
    return typeof demo[0] !== 'undefined' ? (
      <div className='demo'>
        <strong>Demo:</strong>
        <a href={demo[0].uri} target='_blank' rel="noopener noreferrer">
          {demo[0].uri}
        </a>
      </div>
    ) : (
      ''
    );
  }

  showGithub(github) {
    return typeof github[0] !== 'undefined' ? (
      <div className='github'>
        <strong className='source'>Source:</strong>
        {
          // eslint-disable-next-line
        }{' '}
        <a href={github[0].uri} target='_blank' rel='noopener noreferrer'>
          <i className='fa fa-github-square fa-3x' aria-hidden='true'></i>
        </a>
      </div>
    ) : (
      ''
    );
  }

  showProject(project, images) {
    // TODO: imgUrl should not need adjustment
    // let imgUrl = project.field_project_image[0].url.replace('http://localhost', 'http://192.168.0.25');
    let imgUrl = project.field_project_image[0].url;
    images.push(imgUrl);

    return (
      <div key={project.nid[0].value} id='projects'>
        <div className='row project-container'>
          <div className='col col-md-7' style={{ overflow: 'hidden' }}>
            {this.showImage(project.field_project_image, images.length - 1)}
          </div>
          <div className='col col-md-5'>
            <h3>
              {project.title[0].value} {this.showBadge(project.field_proof_of_concept)}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: project.body[0].value }} />
            {this.showDemo(project.field_demo)}
            {this.showGithub(project.field_github)}
          </div>
        </div>
        <hr />
      </div>
    );
  }

  render() {
    let _this = this;
    let images = [];

    // const css = styles;  //storing styles in const

    return (
        <div id='page-projects'>
          <h1>{this.state.title}</h1>
          <hr />
          <div id='projects-page-body'>{this.state.body}</div>
        {this.state.projects.map(function (project) {
            console.log(project);
            return _this.showProject(project, images);
          })}
          {this.state.isOpen && (
            <Lightbox
              mainSrc={images[this.state.photoIndex]}
              onCloseRequest={() => _this.setState({ isOpen: false })}
            />
          )}
        </div>
    );
  }
}

export default Projects;
