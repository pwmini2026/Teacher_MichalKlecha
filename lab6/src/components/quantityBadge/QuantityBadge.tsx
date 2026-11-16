import './QuantityBadge.css';

interface QuantityProps {
    value: number;
}

const QuantityBadge = ({ value }: QuantityProps) => {
    return (
        <div className="quantity-badge">
            {value}
        </div>
    );
}

export default QuantityBadge;