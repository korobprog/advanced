export default function getAttacks({ special }) {
  return special.map(
    ({ id, name, description = "Описание недоступно", icon }) => {
      return { id, name, description, icon };
    }
  );
}
