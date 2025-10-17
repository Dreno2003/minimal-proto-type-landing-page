interface StyledSwitchProps {
  disabled?: boolean;
  onChecked: (value: boolean) => void;
}
const StyledSwitch = ({ disabled, onChecked }: StyledSwitchProps) => {
  return (
    <div className="switch-wrapper">
      <div className="switch demo3">
        <input
          disabled={disabled}
          type="checkbox"
          onChange={(e) => onChecked(e.target.checked)}
        />
        <label>
          <i></i>
        </label>
      </div>
    </div>
  );
};

export default StyledSwitch;
