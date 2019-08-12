/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * pre->a->b
 *  pre ->b->a
 */
// var swapPairs = function (head) {
//   var ln = new ListNode(-1)
//   ln.next = head
//   var pre = ln
//   while (pre.next && pre.next.next) {
//     var a = pre.next
//     var b = pre.next.next

//     a.next = b.next
//     b.next = a
//     pre.next = b
//     pre = pre.next.next
//   }
//   return ln.next
// }

var swapPairs = function (head) {
  var ln = new ListNode(-1)
  var pre = new ListNode(-1)
  ln.next = pre
  pre.next = head

  var cur = head
  while (cur && cur.next) {
    var a = cur
    var b = cur.next
    var next = b.next
    a.next = b.next
    b.next = a
    pre.next = b
    pre = a
    console.log(cur, cur.next)
    cur = next
  }
  return ln.next.next
}
