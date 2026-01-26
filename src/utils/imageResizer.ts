/**
 * 
//  * 원본 파일 객체
 * @param file 
// 최대 너비 제한
 * @param maxWidth
// 리사이징된 새로운 File 객체 
 * @returns 
 */
export const resizeImage = async (file:File, maxWidth: number = 1200): Promise<File> => {
  const bitmap = await createImageBitmap(file, { imageOrientation:'from-image'});

  // 이미지 리사이징 비율 계산
  let { width, height } = bitmap;
  if(width > maxWidth){
    const ratio = maxWidth/width;
    width = maxWidth;
    height = height * ratio;
  }

  // OffScreen 생성 및 그리기
  const offscreen = new OffscreenCanvas(width, height);
  const ctx = offscreen.getContext('2d')

  // 이미지 품질 향상 설정
  if(ctx){
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(bitmap,0, 0, width, height);
  }

  // blob 변환
  const blob = await offscreen.convertToBlob({
    type: 'image/webp',
    quality: 0.8
  });

  // 서버 전송을 위한 File 객체로 변환
  return new File([blob], file.name.replace(/\.[^/.]+$/, "webp"), {
    type: "image/webp"
  })
}
