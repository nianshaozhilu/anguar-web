import { Component, OnInit, OnDestroy } from '@angular/core';
import { TreeNodeInterface } from './treeModeInterFace';
@Component({
    selector:'tag-index',
    templateUrl:'./tag-index.component.html',
    styleUrls:['./tag.component.less','./tag-index.component.less']
})

export class TagIndexComponent implements OnInit, OnDestroy {

    constructor(){}
 
    ngOnDestroy(): void {

    }

    data = [
        {
          key     : 1,
          name    : '莆田工厂',
          age     : 60,
          address : 'New York No. 1 Lake Park',
          
          children: [
            {
              key    : 11,
        
              name   : '酿造',
              age    : 42,
              address: 'New York No. 2 Lake Park',
              children: [
                    {
                        key    : 111,
                        name   : '糖化1期',
                        age    : 42,
                        address: 'New York No. 2 Lake Park',
                        children: [
                            {
                                key    : 1111,
                                name   : '1#煮沸锅',
                                age    : 42,
                                address: 'New York No. 2 Lake Park',
                            
                            }
                        ]
                    }
                ]
            }, 
            {
              key     : 12,
              expand     : true, 
              name    : 'John Brown jr.',
              age     : 30, 
              address : 'New York No. 3 Lake Park',
              children: [ {
                expand     : true,
                key    : 121,
                name   : 'Jimmy Brown',
                age    : 16,
                address: 'New York No. 3 Lake Park'
              } ]
            },
            {
              key     : 13,
              name    : 'Jim Green sr.',
              age     : 72,
              address : 'London No. 1 Lake Park',
              children: [
                {
                  key     : 131,
                  expand     : true,
                  name    : 'Jim Green',
                  age     : 42,
                  address : 'London No. 2 Lake Park',
                  children: [
                    {
                      key    : 1311,
                      expand     : true,
                      name   : 'Jim Green jr.',
                      age    : 25,
                      address: 'London No. 3 Lake Park'
                    },
                    {
                      key    : 1312,
                      name   : 'Jimmy Green sr.',
                      age    : 18,
                      address: 'London No. 4 Lake Park'
                    }
                  ]
                }
              ]
            }
          ]
        } 
      ];
      expandDataCache = {};
    
      collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
        if ($event === false) {
          if (data.children) {
            data.children.forEach(d => {
              const target = array.find(a => a.key === d.key);
              target.expand = false;
              this.collapse(array, target, false);
            });
          } else {
            return;
          }
        }
      }
    
      convertTreeToList(root: object): TreeNodeInterface[] {
        const stack = [];
        const array = [];
        const hashMap = {};
        stack.push({ ...root, level: 0, expand: true });
    
        while (stack.length !== 0) {
          const node = stack.pop();
          this.visitNode(node, hashMap, array);
          if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
              stack.push({ ...node.children[ i ], level: node.level + 1, expand: true, parent: node });
            }
          }
        }
    
        return array;
      }
    
      visitNode(node: TreeNodeInterface, hashMap: object, array: TreeNodeInterface[]): void {
        if (!hashMap[ node.key ]) {
          hashMap[ node.key ] = true;
          array.push(node);
        }
      }
    
      ngOnInit(): void {
        this.data.forEach(item => {
          this.expandDataCache[ item.key ] = this.convertTreeToList(item);
        });
      }
}