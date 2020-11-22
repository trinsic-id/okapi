it('should serialize', () => {
  let a: Uint8Array = Uint8Array.from([1, 2, 3]);
  let b: number[] = Array.from<number>(a);

  expect(b).toStrictEqual([1, 2, 3]);
});
