import ComputeService from '../src/services/compute';

describe('ComputeService', () => {
  it('should add two numbers', () => {
    const added = ComputeService.Add(1, 2);
    expect(added).toBe(3);
  });
  it('should add multiple numbers', () => {
    const added = ComputeService.Add(1, 2, 3);
    expect(added).toBe(6);
  });

  it('should subtract two numbers', () => {
    const subtracted = ComputeService.Subtract(1, 2);
    expect(subtracted).toBe(-1);
  });
});
