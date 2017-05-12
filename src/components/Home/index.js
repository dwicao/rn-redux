
import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../../actions';

class Home extends Component {
  constructor() {
    super();

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.props.actions.addTodo({
      text: "makan"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {JSON.stringify(this.props)}
        </Text>
        <TouchableOpacity onPress={this.addTodo}>
          <Text>Tambah Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
