

test('debe ser true', () => {

  const isActive = true;

  if (isActive) {
    throw new Error('No esta activo')
  }

})