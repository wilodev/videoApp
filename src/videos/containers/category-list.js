import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Empty from '../components/empty';
import CategoryListLayout from '../components/category-list-layout';
import HorizontalSeparator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		list: state.categoryList,
	};
}

class CategoryList extends Component {
	keyExtractor = item => item.id.toString();
	renderEmtpy = () => <Empty text="No hay sugerencias :(" />;
	itemSeparator = () => <HorizontalSeparator />;
	renderItem = ({ item }) => {
		return <Category {...item} />;
	};
	render() {
		return (
			<CategoryListLayout title="Categoría">
				<FlatList
					horizontal={true}
					keyExtractor={this.keyExtractor}
					data={this.props.list}
					ListEmptyComponent={this.renderEmtpy}
					ItemSeparatorComponent={this.itemSeparator}
					renderItem={this.renderItem}
				/>
			</CategoryListLayout>
		);
	}
}

export default connect(mapStateToProps)(CategoryList);
