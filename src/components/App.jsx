class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'javascript',
      video: window.exampleVideoData[0],
      key: window.YOUTUBE_API_KEY,
      max: 5,
      videos: []
    };
  }

  handleClick(video) {
    this.setState({
      video: video
    });
  }

  handleInputChange(string) {

    var context = this;

    this.setState({
      query: string
    });

    this.props.searchYouTube(context.state, function (data) {
      context.setState({
        video: data[0],
        videos: data
      });
    });

  }

  componentDidMount() {
    var context = this;

    this.props.searchYouTube(context.state, function (data) {
      context.setState({
        video: data[0],
        videos: data
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/* <div><h5><em><form><input placeholder={this.state.query} 
        ref={input => this.search = input} onChange={this.handleInputChange}/>
        <input type="button" value="search"></input></form></em></h5></div> */}
            <div><h5><em>Search</em><Search handleInputChange={this.handleInputChange.bind(this)} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* {console.log(options.video)} */}
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.video} /></h5></div>
          </div>
          <div className="col-md-5">
            {/* <div><h5><em>videoList</em><VideoList videos={window.exampleVideoData} handleClick={this.handleClick.bind(this)}/></h5></div> */}
            <div><h5><em>videoList</em><VideoList videos={this.state.videos} handleClick={this.handleClick.bind(this)} /></h5></div>
          </div>
        </div>
      </div>
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// ReactDOM.render(<App searchYouTube/>, document.getElementById("app"))