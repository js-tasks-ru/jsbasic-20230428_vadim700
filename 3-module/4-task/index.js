function showSalary(users, age) {
  return (
    users.map((item, key) => item.age <= age
      ? `${item.name}, ${item.balance}\n`
      : '')
      .join('')
      .trim()
  );
}
