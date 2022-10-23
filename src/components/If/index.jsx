export default function If({ children, condition, fallback }) {
  return condition ? children : fallback;
}
