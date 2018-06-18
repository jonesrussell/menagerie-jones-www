import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: ''
		};
	};

	componentDidMount() {
		let _this = this;
        console.log(this.props.location.pathname);
		fetch(process.env.REACT_APP_API_URL + this.props.location.pathname + '?_format=json')
			.then(results => {
				return results.json();
			})
			.then(data => {
                console.log(data);
				let title = data.title[0].value;
				let body = <div dangerouslySetInnerHTML={{__html: data.body[0].value}} />;
				_this.setState({ title: title, body: body });
			});
	}

    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
        }).format(new Date(date));
    }

	showPost(post, images) {
		//images.push(post.field_image[0].url);

		return (
			<div key={post.nid[0].value} id="posts">
				<div className="row post-container">
					<div className="col col-md-12">
						<h3>{post.title[0].value}</h3>
                        <time dateTime={post.created[0].value}>{this.formatDate(post.created[0].value)}</time>
            			<div>
                            <span className="intro">
                            </span>
    						<span dangerouslySetInnerHTML={{__html: post.body[0].value}} />
            			</div>
					</div>
				</div>
				<hr/>
			</div>
		)
	}

	render() {
		return (
			<div id="page-post">
				<h1>{this.state.title}</h1>
				<hr/>
				<article>
					{this.state.body}
				</article>
			</div>
		)
	}
}

export default Post
