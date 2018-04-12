import React, { Component} from 'react';
import { View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { searchVideos, clearSearch } from '../store/actions'
import { bindActionCreators } from 'redux'

class SearchForm extends Component {
  state = {
    text: ''
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'black', borderWidth: 1, borderRadius: 8, padding: 6}}
          onChangeText={(text) => this.setState({text})}
          placeholder="Search Video Here"
          value={this.state.text}
        />
        <Button
          title="Search"
          style={ {borderColor: 'black', borderWidth: 1 }}
          onPress={() => { this.props.searchVideos(this.state.text) }}
        />
        {
          this.state.text &&
          <Button
            title="Clear"
            style={ {borderColor: 'black', borderWidth: 1 }}
            onPress={() => { 
              this.props.clearSearch() 
              this.setState({ text: '' })
            }}
          /> 
        }
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ searchVideos, clearSearch }, dispatch)

export default connect(null, mapDispatchToProps)(SearchForm);
