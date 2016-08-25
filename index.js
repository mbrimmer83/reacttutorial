class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 100
    };
  }
  render() {
    var { name, age, bio, pic } = this.props;
    var { height } = this.state;
    return (
      <div className ="profile-box">
        <h2>{name}!</h2>
        <h4>Age: {age}</h4>
        <h4>Bio: {bio}</h4>
        <img src={pic} height = {height} />
        <br />
        <button onClick={this.zoomPicOut.bind(this)}>-</button>
        <button onClick={this.zoomPicIn.bind(this)}>+</button>
      </div>
    );
  }
  zoomPicIn() {
      this.setState({ height: this.state.height + 20 });
    }

    zoomPicOut() {
      this.setState({ height: this.state.height - 20 });
    }
}

ReactDOM.render(<Profile name = "Matthew" age = {33} bio = "I am learning react!" pic = "https://s1.vagalume.com/rihanna/images/profile-bigw314.jpg"/>, document.getElementById('app'));
