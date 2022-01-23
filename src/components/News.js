import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
  static defaultProps={
    country:'us',
    pageSize:8

  }
  static propType={
    country:PropTypes.string,
    pageSize:PropTypes.number,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults:0
    }
  }
  async updateNews(){

      this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79f830aae3dd48b8839a0ced24713aeb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
      this.setState({loading:true});
      let data = await fetch(url);
      this.props.setProgress(30);
     
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({loading:false});
      console.log(parsedData);
      console.log(data);
      this.setState(
        {
          articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false,
        });
        this.props.setProgress(100);

  }
  async componentDidMount()
  {
    this.updateNews();
  }
  fetchMoreData = async() => {
    this.setState({
      page:this.state.page+1,
     
    })
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79f830aae3dd48b8839a0ced24713aeb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79f830aae3dd48b8839a0ced24713aeb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({loading:false});
    console.log(parsedData);
    console.log(data);
    this.setState(
      {
        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
      });
  }
 

  render() {
    console.log("render");
    return (
      <>
        <h1 className="text-center">NewsMonkey-Top Headlines</h1>
        <br></br>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.legth!==this.state.totalResults}
          loader={<Spinner/>}
        >

<div className="container">
        <div className="row">
        { this.state.articles.map((element) => {
            console.log(element);
            return <div className="col-md-4 " key={element.url}>
              <NewsItem
                key={element.url}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
                
                />
                
            </div>
          })}
          </div>
        </div>
        </InfiniteScroll>
</>

    )
  }
}

export default News;
