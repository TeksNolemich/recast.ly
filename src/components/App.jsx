class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'default',
      currentVid: window.exampleVideoData[0],
      key: window.YOUTUBE_API_KEY,
      max: 5
    };
  }

  handleClick(video) {
    this.setState({currentVid: video})
  }

  handleInputChange(string) {
    var options = {
      query: this.state.query,
      currentVid: this.state.currentVid,
      key: this.state.key,
      max: this.state.max
    }
    var context = this;
    console.log('typed')
    this.setState({
      query: string
    })
  }

  componentDidMount() {
    var options = {
      query: this.state.query,
      currentVid: this.state.currentVid,
      key: this.state.key,
      max: this.state.max
    }
  }
  render() {
    return (
      <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        {/* <div><h5><em><form><input placeholder={this.state.query} 
        ref={input => this.search = input} onChange={this.handleInputChange}/>
        <input type="button" value="search"></input></form></em></h5></div> */}
        <div><h5><em>Search</em><Search query={this.handleInputChange.bind(this)}/></h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVid}/></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em><VideoList videos={window.exampleVideoData} handleClick={this.handleClick.bind(this)}/></h5></div>
        
      </div>
    </div>
  </div>
    )
  }
  
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App />, document.getElementById("app"))