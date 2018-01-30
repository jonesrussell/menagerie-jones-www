import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
	{
		src: 'http://placehold.it/1900x1080?1',
		header: 'First Heading',
		altText: 'First Image',
		caption: 'First Slide'
	},
	{
		header: 'Second Heading',
		src: 'http://placehold.it/1900x1080?2',
		altText: 'Second Image',
		caption: 'Second Slide'
	},
	{
		header: 'Third Heading',
		src: 'http://placehold.it/1900x1080?3',
		altText: 'Third Image',
		caption: 'Third Slide'
	}
];

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = { activeIndex: 0 };
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.goToIndex = this.goToIndex.bind(this);
		this.onExiting = this.onExiting.bind(this);
		this.onExited = this.onExited.bind(this);
	}

	onExiting() {
		this.animating = true;
	}

	onExited() {
		this.animating = false;
	}

	next() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
		this.setState({ activeIndex: nextIndex });
	}

	previous() {
		if (this.animating) return;
		const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
		this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
		if (this.animating) return;
		this.setState({ activeIndex: newIndex });
	}

	render() {
		const { activeIndex } = this.state;

		const slides = items.map((item) => {
			console.log("item: ", item);
			console.log("this: ", this);
			return (
				<CarouselItem
					onExiting={this.onExiting}
					onExited={this.onExited}
//					key={item.src}
				>
					<img src={item.src} alt={item.altText} />
					<CarouselCaption captionText={item.caption} captionHeader={item.header} />
				</CarouselItem>
			);
		});

		return (
			<Carousel
			activeIndex={activeIndex}
			next={this.next}
			previous={this.previous}
			>
			<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
			{slides}
			<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
			<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
			</Carousel>
		);
	}
}

export default Header
/*
	<header>
      <div id="carouselHeaderIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselHeaderIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselHeaderIndicators" data-slide-to="1"></li>
          <li data-target="#carouselHeaderIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active" style={{backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
            <div className='carousel-caption d-none d-md-block'>
              <h3>First Slide</h3>
              <p>This is a description for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" style={{backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
            <div className="carousel-caption d-none d-md-block">
              <h3>Second Slide</h3>
              <p>This is a description for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item" style={{backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
            <div className="carousel-caption d-none d-md-block">
              <h3>Third Slide</h3>
              <p>This is a description for the third slide.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselHeaderIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselHeaderIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </header>

*/
