import React from 'react';
import '../scss/ToccMap.scss';
import '../scss/Loader.scss';
import '../scss/ResponsiveEmbed.scss';

class ToccMapItem extends React.Component {
  render() {
    return (
      <div className="toccmap__item" onClick={ this.props.onClick } style={ { left: this.props.coords.x, top: this.props.coords.y } }>
        <i>{ this.props.content.icon }</i>
      </div>
    );
  }
}

class ToccMapOverlay extends React.Component {
  render() {
    let props = {
      className: 'oc-overlay'
    };

    let content = "";
    let styleOverride = {};
    let buttonOverride = {
      cursor: 'pointer'
    };

    const isHTML = (str) => {
      var a = document.createElement('div');
      a.innerHTML = str;

      for (var c = a.childNodes, i = c.length; i--; ) {
        if (c[i].nodeType === 1) return true;
      }

      return false;
    }

    if (this.props.data) {
      if (this.props.data.content.modal.indexOf('www.youtube.com/embed') >= 0) {
        styleOverride = {
          background: 'none'
        };
        buttonOverride.color = 'white';
        content = (
          <div className="oc-responsive-embed">
            <iframe src={ this.props.data.content.modal } title={ this.props.data.content.icon } />
          </div>
        );
      } else if (isHTML(this.props.data.content.modal)) {
        content = (
          <div className="oc-content">
            <div dangerouslySetInnerHTML={ { __html: this.props.data.content.modal } } />
          </div>
        );
      } else {
        content = (
          <div className="oc-content">
            <p dangerouslySetInnerHTML={ { __html: this.props.data.content.modal } } />
          </div>
        );
      }
    }

    if (this.props.open) {
      props.open = 'open';
    }
    return (
      <div {...props}>
        <div className="oc-overlay__container" style={ styleOverride }>
          <button className="oc-overlay__close" onClick={ this.props.onClose } style={ buttonOverride } />
          { content }
        </div>
      </div>
    );
  }
}

class ToccMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: [],
      theme: 'Default',
      modalItem: false
    };

    this.getMapItems = this.getMapItems.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetch('https://script.google.com/macros/s/AKfycbx0-06cEJ36cILW7N1QbyRvHJSiNrSCxL9QqHo_Sc90uDDHqA/exec', {
        mode: 'cors',
        redirect: 'follow'
      }).then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({ data: json.data, theme: json.theme, loading: false });
      });
    });
  }

  getMapItems() {
    return this.state.data.map((d, i) => {
      return (
        <ToccMapItem key={ i } {...d} onClick={ () => { this.onClickItem(d) } }/>
      );
    });
  }

  onClickItem(data) {
    this.setState({ modalItem: data });
  }

  onCloseItem() {
    this.setState({ modalItem: false });
  }

  render() {
    let classNames = ['toccmap'];
    if (this.state.loading) {
      classNames.push('loading');
    }

    let overlayProps = {
      onClose: this.onCloseItem.bind(this)
    };

    if (this.state.modalItem !== false) {
      overlayProps.open = 'open';
    }

    return (
      <div className={ classNames.join(' ') }>
        { this.getMapItems() }
        <ToccMapOverlay {...overlayProps} data={ this.state.modalItem } />
      </div>
    );
  }
}

export default ToccMap;
