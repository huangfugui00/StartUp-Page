import {
    RefObject,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
  } from 'react';
  import { RootEl } from './RootEl';
  import { RootWindow } from './RootWindow';
  import { RootFactory } from './RootFactory';
  
  //自定义组件useScrollspy，输入为sectionRefs，
  // 输出为
  // elementsStatusInViewport：boolean,
  // currentElementIndexInViewport:number

  export const useScrollspy = ({
    sectionRefs,//多个div的ref数组
    rootSelector,
    offset = 0,
  }: {
    sectionRefs: RefObject<Element>[];
    rootSelector?: string;
    offset?: number;
  }) => {
    let rootEl :RootWindow | RootEl | null = null
  
    useEffect(() => {
    // 创建根elemt
      rootEl = RootFactory.create(rootSelector);
    }, [rootSelector]);
  
    // 判断是否滑到底部的函数
    const isScrolledToBottom = useCallback(() => {
      if (!rootEl) {
        return false;
      }
      return rootEl.isScrolledToBottom();
    }, []);
  
    // 判断鼠标是否在该element
    const isElementInViewport = useCallback(
      (element: Element) => {
        if (!rootEl) {
          return false;
        }
        const innerScrollTop = rootEl.scrollTop;
        const innerScrollBottom = innerScrollTop + rootEl.outerHeight;
        const elementRect = element.getBoundingClientRect();
        const elementScrollTop =
          rootEl instanceof RootEl
            ? innerScrollTop + elementRect.top - rootEl.top + offset
            : innerScrollTop + elementRect.top + offset;
        const elementScrollBottom = elementScrollTop + elementRect.height;
  
        return [
          elementScrollTop < innerScrollBottom,
          elementScrollBottom > innerScrollTop,
        ].every(v => v);
      },
      [ rootEl,offset]
    );
  
    //返回sectionRefs对应的各个DIV的view状态
    const getElementsStatusInViewport = useCallback(() => {
      return sectionRefs.map(sectionRef => {
        if (sectionRef.current) {
          return isElementInViewport(sectionRef.current);
        }
        return false;
      });
    }, [isElementInViewport, sectionRefs]);
  
    const [elementsStatusInViewport, updateElementsStatusInViewport] = useState<
      boolean[]
    >([]);
    
    //返回当前鼠标所在sectionRefs索引
    const currentElementIndexInViewport = useMemo(
      () => elementsStatusInViewport.findIndex(status => status),
      [elementsStatusInViewport]
    );
  
 
    const spy = useCallback(() => {

      const newElementsStatusInViewport = isScrolledToBottom()
        ? [...new Array(sectionRefs.length - 1).fill(false).map(v => v), true]
        : getElementsStatusInViewport();

      updateElementsStatusInViewport(newElementsStatusInViewport);
    }, [getElementsStatusInViewport, isScrolledToBottom, sectionRefs]);
  
    useEffect(() => {
      // spy();
      if (rootEl) {
        rootEl.registerScrollEvent(spy);
      }
  
      return () => {
        if (rootEl) {
          rootEl.unregisterScrollEvent(spy);
        }
      };
    }, []);
  
    return {
      elementsStatusInViewport,
      currentElementIndexInViewport,
    };
  };