import { Component } from "react";
import * as reactstrap from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  renderDish(dish) {
    if (dish != null)
      return (
        <reactstrap.Card>
          <reactstrap.CardImg top src={dish.image} alt={dish.name} />
          <reactstrap.CardBody>
            <reactstrap.CardTitle>{dish.name}</reactstrap.CardTitle>
            <reactstrap.CardText>{dish.description}</reactstrap.CardText>
          </reactstrap.CardBody>
        </reactstrap.Card>
      );
    else return <div></div>;
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <reactstrap.Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <reactstrap.CardImg width="100%" src={dish.image} alt={dish.name} />
            <reactstrap.CardImgOverlay>
              <reactstrap.CardTitle>{dish.name}</reactstrap.CardTitle>
            </reactstrap.CardImgOverlay>
          </reactstrap.Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
