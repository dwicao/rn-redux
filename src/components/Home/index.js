
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

    this._id = 0;

    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  addTodo() {
    this.props.actions.addTodo({
      _id: this._id,
      text: "makan"
    });

    this._id = this._id + 1;
  }

  editTodo() {
    this.props.actions.editTodo(2, 'TIDUR');
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text>
          {JSON.stringify(this.props)}
        </Text>
        <TouchableOpacity onPress={this.addTodo}>
          <Text>Tambah Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.editTodo}>
          <Text>Edit Todo</Text>
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
