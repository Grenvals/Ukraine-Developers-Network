import React from 'react'
import style from './UserStatus.module.scss'
import editImg from '../../../../assets/images/profile/edit.svg'

export class UserStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }
  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
    this.props.updateUserStatus(this.state.status)
  }

  onStatusChange = e => {
    this.setState({
      status: e.currentTarget.value,
    })
  }
  render() {
    return (
      <div className={style.userStatus}>
        {!this.state.editMode && (
          <div onClick={this.activateEditMode} className={style.statusText}>
            <p>{this.props.status || 'not set'}</p>
          </div>
        )}
        {this.state.editMode && (
          <div className={style.inputBlock}>
            <input
              onChange={this.onStatusChange}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              type="text"
            />
          </div>
        )}
        <div className={style.editImg} onClick={this.activateEditMode}>
          <img src={editImg} alt="edit" />
        </div>
      </div>
    )
  }
}

export default UserStatus
