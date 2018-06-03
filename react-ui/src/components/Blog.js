import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import './Blog.scss';

class Blog extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			posts: [],
			isOpen: false,
			images: [],
			photoIndex: 0
		};
	};

	componentDidMount() {
		let _this = this;

		fetch(process.env.REACT_APP_API_URL + '/blog?_format=json')
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
						body: body
					});
			});

		fetch(process.env.REACT_APP_API_URL + '/blog/rest?_format=json')
			.then(results => {
				return results.json();
			})
			.then(data => {
                console.log(data);
				_this.setState({ posts: data });
			});
	}

	showImage(image, i) {
		let _this = this;

		return <img src={image[0].url} alt={image[0].alt} onClick={ function() {
			_this.setState({
				photoIndex: i,
				isOpen: true
			})
		}}/>
	}

    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        }).format(new Date(date));
    }

	showPost(post, images) {
        console.log(post);
        console.log(post.nid);
		//images.push(post.field_image[0].url);

		return (
			<div key={post.nid} id="posts">
				<div className="row post-container">
					<div className="col col-md-12">
						<h2 dangerouslySetInnerHTML={{__html: post.title}} />
            			<div>
    						<span dangerouslySetInnerHTML={{__html: post.body}} />
            			</div>
					</div>
				</div>
				<hr/>
			</div>
		)
	}

	render() {
		let _this = this;
		let images = [];

		return (
			<div id="page-blog">
				<h1>{this.state.title}</h1>
				<hr/>
				<div id="blog-page-body">
					{this.state.body}
				</div>
				{this.state.posts.map(function(post) {
					return ( _this.showPost(post, images) )
				})}
				{this.state.isOpen && (
				  <Lightbox
					mainSrc={images[this.state.photoIndex]}
					onCloseRequest={() => _this.setState({ isOpen: false })}
				  />
				)}
			</div>
		)
	}
}

export default Blog
