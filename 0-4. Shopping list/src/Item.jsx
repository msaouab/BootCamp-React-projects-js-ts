

function	Item({item, onRemoveItem}) {
	return	(
		<li>
			{item}
			<button className="delete" onClick={() => onRemoveItem(item)}>
				x
			</button>
		</li>
	)
}

export	default Item