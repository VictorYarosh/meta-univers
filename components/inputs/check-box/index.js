export default function CheckBox({ label = "", ...props }) {
  return (
    <div className="flex flex-row items-center space-x-2 text-[#A1A0DF] font-medium text-sm">
      <input
        type="checkbox"
        className="w-[24px] h-[24px] checked:bg-transparent"
      />
      <label>{label}</label>
    </div>
  );
}
